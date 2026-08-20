# MB 导航车配置

## 连接信息

| 项目 | 内容 |
| --- | --- |
| VNC 密码 | `mb123456` |
| 路由器地址 | `192.168.2.1` |
| 路由器密码 | `admin` |
| Wi-Fi | `SLK` |
| Wi-Fi 密码 | `slk100200` |

## 远程方式

- SSH 连接工控机
- 使用 Remmina / VNC Viewer 远程桌面
- 当前可用方式：`vncserver :1` 虚拟桌面

## VNC 服务

查看 VNC 会话：

```bash
vncserver -list
```

关闭 `:1` 会话：

```bash
vncserver -kill :1
```

启动 `:1` 会话：

```bash
vncserver :1 -geometry 1920x1080 -depth 24
```

## SSH 隧道

在本机执行，将 `工控机IP` 替换为实际 IP：

```bash
ssh -L 5901:localhost:5901 mb@192.168.2.206
```

## VNC 连接

VNC Viewer / Remmina 连接地址：

```text
localhost:5901
```







启动雷达

mb@mb-Default-string:~$ cd ROS/helios_ws/
mb@mb-Default-string:~/ROS/helios_ws$ source devel/setup.bash 
mb@mb-Default-string:~/ROS/helios_ws$ roslaunch rslidar_sdk start.launch 

imu
mb@mb-Default-string:~$ cd ROS/IMU_ws/
mb@mb-Default-string:~/ROS/IMU_ws$ source devel/setup.bash 
mb@mb-Default-string:~/ROS/IMU_ws$ roslaunch yesense_imu yesense_ahrs.launch 

启动fast-lio2
mb@mb-Default-string:~$ cd ROS/FAST_LIO_ws/
mb@mb-Default-string:~/ROS/FAST_LIO_ws$ source devel/setup.bash 
mb@mb-Default-string:~/ROS/FAST_LIO_ws$ roslaunch fast_lio mapping_rslidar_helios16.launch
