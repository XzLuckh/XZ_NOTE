// 受保护内容访问控制：共享常量与解锁判断
// 解锁后 1 小时内免输入密码，过期后需重新输入

export const STORAGE_KEY = 'xz_note_docs_password_ok'
export const EXPIRY_KEY = 'xz_note_docs_password_expiry'
export const PASSWORD = 'xznote2026'
export const PASSWORD_TTL = 60 * 60 * 1000 // 1 小时

/** 当前是否处于已解锁状态（未解锁 / 已过期都会清理并返回 false） */
export function isUnlocked(): boolean {
  if (typeof window === 'undefined') return false

  const expiry = Number(localStorage.getItem(EXPIRY_KEY) || 0)
  if (!expiry || Date.now() > expiry) {
    localStorage.removeItem(STORAGE_KEY)
    localStorage.removeItem(EXPIRY_KEY)
    return false
  }

  return localStorage.getItem(STORAGE_KEY) === 'true'
}

/** 写入解锁状态，有效期 PASSWORD_TTL */
export function setUnlocked(): void {
  localStorage.setItem(STORAGE_KEY, 'true')
  localStorage.setItem(EXPIRY_KEY, String(Date.now() + PASSWORD_TTL))
}
