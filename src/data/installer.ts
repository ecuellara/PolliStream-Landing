import generated from './installers.generated.json'

type InstallerEntry = {
  available?: boolean
  version?: string
  size?: string
  bytes?: number
  url?: string
  sha256?: string
  fileName?: string
}

const entry = (generated as Record<string, InstallerEntry | undefined>).installer

/** Published release asset, used when the local binary is not in the workspace. */
const RELEASE_URL =
  'https://github.com/ecuellara/PolliStream-Downloads/releases/download/downloads/pollistream-installer.apk'

/**
 * Helper APK that installs PolliStream on LG webOS, Samsung Tizen (legacy and
 * modern) and Android TV without Tizen Studio or command-line steps.
 *
 * The binary lives in the public GitHub release and `installers/installer/` is
 * gitignored, so a build without the local file still links to the published
 * asset instead of hiding the section.
 */
export const installerApp = {
  available: true,
  url: entry?.available && entry.url ? entry.url : RELEASE_URL,
  version: entry?.version ?? '',
  size: entry?.size ?? '',
  bytes: entry?.bytes ?? 0,
  sha256: entry?.sha256 ?? '',
  fileName: entry?.fileName ?? 'pollistream-installer.apk',
} as const

/** WhatsApp support number in international format, without the plus sign. */
export const whatsappNumber = '51992164951'
