import type { ImageMetadata } from 'astro'
import type { ProductSlug } from './products'

import androidScreen from '../assets/screens/android.png'
import androidTvScreen from '../assets/screens/androidTv.png'
import lgScreen from '../assets/screens/lg.png'
import samsungLegacyScreen from '../assets/screens/samsunglegacy.png'
import windowsScreen from '../assets/screens/windows.png'

/**
 * Real app screenshots used inside the hero device frame.
 *
 * Platforms without an entry keep the coded UI mockup as a fallback, so the
 * hero still works while a new capture is being prepared.
 */
export const heroScreens: Partial<Record<ProductSlug, ImageMetadata>> = {
  lg: lgScreen,
  samsung: samsungLegacyScreen,
  android: androidScreen,
  'android-tv': androidTvScreen,
  windows: windowsScreen,
}
