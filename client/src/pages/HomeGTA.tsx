import GTAGameCanvasEnhanced from '@/components/GTAGameCanvasEnhanced';
import PortfolioOverlay from '@/components/PortfolioOverlay';

/**
 * GTA-Style Interactive Home Page
 * 
 * Design Philosophy: Interactive Gaming Experience
 * - Top-down GTA-style game view with animated vehicles
 * - Portfolio information overlaid on the game
 * - Interactive elements and smooth animations
 */

export default function HomeGTA() {
  return (
    <div className="w-full h-screen bg-black overflow-hidden relative">
      <GTAGameCanvasEnhanced />
      <PortfolioOverlay />
    </div>
  );
}
