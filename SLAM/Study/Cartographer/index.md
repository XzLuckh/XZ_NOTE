# Cartographer 定位导航部署实验手册

> **环境**：Ubuntu 20.04 · ROS 1 Noetic
> **来源**：`cartographer技术文档-ubuntu20.04-ros1-noetic.docx` 转换整理

## 一、准备工作（Ubuntu ROS系统）

#### 1.1说明

本文档记录在Ubuntu20.04 Ros1 Noetic版本下配置cartographer激光SLAM。

#### 1.2 ubuntu系统准备

- 首先需要一个Ubuntu20.04或者Ubuntu18.04的系统，可以通过虚拟机（如VMware）或者docker或者安装双系统安装。这里我是在Ubuntu20.04-Ros1-Noetic系统中进行配置。
- 虚拟机安装参考链接：[https://blog.csdn.net/weixin_52799373/article/details/139055794?fromshare=blogdetail&sharetype=blogdetail&sharerId=139055794&sharerefer=PC&sharesource=2201_75436278&sharefrom=from_link](https://blog.csdn.net/weixin_52799373/article/details/139055794?fromshare=blogdetail&sharetype=blogdetail&sharerId=139055794&sharerefer=PC&sharesource=2201_75436278&sharefrom=from_link)
- 也可以使用docker配置ubuntu ros 环境，这里不再赘述。
安装完成之后检查Ubuntu和ROS版本
```bash
lsb_release -a
echo $ROS_DISTRO
```

![图 1](./images/image1.png)

#### 1.3 下载gitee仓库代码

```bash
git clone https://gitee.com/Xz_zh/cartographer_navigation_20.04_noetic.git
```

由于后面我修改了仓库名称，与下面的终端看到的文件夹名称不符，这里无需在意，可以将克隆下载的代码名称改为cartographer_navigation，能避免一些不必要的麻烦。

![图 2](./images/image2.png)

使用vscode打开代码

![图 3](./images/image3.png)

主要是cartographer_location 文件夹和navigation_ws 文件夹，其中cartographer_location 文件夹主要实现了Goole开发的cartographer SLAM系统，主要用于机器人或自动驾驶车辆的2D/3D定位，而navigation_ws 文件夹主要实现了机器人导航系统。
然后，我们对代码进行编译。建议：最好将下载的代码文件夹改一下名字为cartographer_navigation，因为代码中很多地方用到了绝对路径，将文件夹名称修改为cartographer_navigation后能避免修改代码里面的路径。

## 二、cartographer_location编译

**我们首先使用catkin_make_isolated对cartographer_location进行编译**

```bash
#打开终端，安装ninja-build 工具
sudo apt update
sudo apt install ninja-build
```

![图 4](./images/image4.png)

![图 5](./images/image5.png)

```bash
#安装 build-essential（包含 gcc、g++ 等基础编译工具）
sudo apt install build-essential
```

![图 6](./images/image6.png)

打开终端，进入cartographer_location/cartographer_ws目录（也可以使用vscode终端）然后直接进行编译：
```bash
catkin_make_isolated --install --use-ninja
```

![图 7](./images/image7.png)

这里会报错，这是因为缺少absl库，其中缺少的absl库和ceres库我已经在cartographer_location/cartographer_ws/src目录中源码下载，这里只需要编译安装即可

![图 8](./images/image8.png)

进入abseil-cpp目录
```bash
mkdir build && cd build
cmake .. -DCMAKE_POSITION_INDEPENDENT_CODE=ON
make -j$(nproc)
sudo make install
```

注意，这个地方需要设置root密码才能执行sudo make install

![图 9](./images/image9.png)

![图 10](./images/image10.png)

安装完成之后对absl库进行验证：
```bash
# 检查头文件是否安装成功
ls /usr/local/include/absl/
```

```bash
# 检查库文件是否安装成功
ls /usr/local/lib/libabsl_*
```

![图 11](./images/image11.png)

接下来安装cere库
**首先安装Google Log（glog）库**

```bash
sudo apt-get install libgoogle-glog-dev
```

![图 12](./images/image12.png)

**安装 SuiteSparse 和相关依赖**

```bash
sudo apt update
sudo apt install libsuitesparse-dev libgflags-dev
```

![图 13](./images/image13.png)

**进入ceres-solver-1.13.0目录**

```bash
mkdir build && cd build
cmake .. -DSuiteSparse=ON
make -j$(nproc)
sudo make install
```

![图 14](./images/image14.png)

![图 15](./images/image15.png)

**验证ceres库是否安装成功**

```bash
ls /usr/local/include/ceres/
ls /usr/local/lib/libceres*
```

![图 16](./images/image16.png)

由于Ceres安装在/usr/local目录下，而不是默认的/usr目录，因此编译系统无法自动找到非标准路径下的Ceres库，这里需要设置环境变量
```bash
export CMAKE_PREFIX_PATH=/usr/local:$CMAKE_PREFIX_PATH
export LD_LIBRARY_PATH=/usr/local/lib:$LD_LIBRARY_PATH
export PKG_CONFIG_PATH=/usr/local/lib/pkgconfig:$PKG_CONFIG_PATH
```

**安装Lua库**

```bash
sudo apt install liblua5.3-dev lua5.3
```

![图 17](./images/image17.png)

然后进入cartographer_navigation_18.04_melodic/cartographer_location/cartographer_ws目录直接编译即可
```bash
catkin_make_isolated --install --use-ninja
```

如果在编译过程中遇到报错，可直接问AI处理

![图 18](./images/image18.png)

这样cartographer_ws就安装完成了
**验证**

```bash
# 安装 laser_geometry 包（如果是 Ubuntu/Debian 系统）
sudo apt update
sudo apt install ros-noetic-laser-geometry
```

## 三、navigation_ws编译

**系统更新和依赖安装**

```bash
sudo apt update
```

```bash
sudo apt install -y ros-noetic-turtlebot3-msgs
sudo apt install -y ros-noetic-costmap-converter
sudo apt install -y ros-noetic-move-base-flex
sudo apt install ros-noetic-urdf
sudo apt install ros-noetic-gazebo-ros
sudo apt install libsdl1.2-dev
sudo apt install libsdl-image1.2-dev
sudo apt install libyaml-cpp-dev
sudo apt install ros-noetic-diagnostic-updater
sudo apt install ros-noetic-interactive-markers
sudo apt install ros-noetic-xacro
sudo apt install ros-noetic-cmake-modules
sudo apt install ros-noetic-tf2-sensor-msgs
sudo apt install ros-noetic-control-toolbox
sudo apt install ros-noetic-tf2-eigen
```

![图 19](./images/image19.png)

![图 20](./images/image20.png)

进入g2o目录，对g2o进行编译

![图 21](./images/image21.png)

```bash
cd ./navigation_ws/src/g2o/
```

```bash
mkdir -p build && cd build
cmake \ -DCMAKE_INSTALL_PREFIX=/usr/local\ -DCMAKE_BUILD_TYPE=Release\ -DBUILD_EXAMPLES=OFF\ -DBUILD_TESTS=OFF ..
make -j4
sudo make install
```

![图 22](./images/image22.png)

安装完成后回到navigation_ws目录进行编译

![图 23](./images/image23.png)

编译成功

## 四、cartographer导航定位实现

到navigation_ws目录启动gazebo
```bash
export TURTLEBOT3_MODEL=burger     #临时设置环境变量
roslaunch turtlebot3_gazebo turtlebot3_stage_4.launch
```

![图 24](./images/image24.png)

![图 25](./images/image25.png)

然后新建终端到cartographer_ws目录下执行以下命令，启动Cartographer的2D定位系统
```bash
source ./install_isolated/setup.bash
roslaunch cartographer_ros self_backpack_2d_localization.launch
```

![图 26](./images/image26.png)

需要注意的是，在代码中用到了很多绝对路径，根据根据自己的文件夹名需要修改。
**self_backpack_2d_localization.launch**

![图 27](./images/image27.png)

**selfrobot_nav.launch**

![图 28](./images/image28.png)

**2d-1.yaml**

![图 29](./images/image29.png)

新建终端到navigation_ws目录下执行以下命令
```bash
source devel/setup.bash
roslaunch move_base selfrobot_nav.launch
```

![图 30](./images/image30.png)

在打开的rviz中添加话题

![图 31](./images/image31.png)

使用2D Pose Estimate进行重定位

![图 32](./images/image32.png)

等待一段时间后会自动进行重定位，同时第二个终端也能看到一些匹配的输出

![图 33](./images/image33.png)

最后可以使用2D Nav Goal 进行导航

![图 34](./images/image34.png)
