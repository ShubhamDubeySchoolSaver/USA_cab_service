export default function Earnings() {
  return (
    <div className="container mx-auto p-4">
      {/* Header with back arrow and title */}
      <header className="flex items-center space-x-4 mb-4">
        <div className="back-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-move-left"
          >
            <path d="M6 8L2 12L6 16" />
            <path d="M2 12H22" />
          </svg>
        </div>
        <div className="text-2xl font-bold">Daily</div>
      </header>

      {/* Date and Earnings (replace with dynamic content) */}
      <section className="date-earnings text-lg mb-4">
        {/* <div className="date">{{ today | date }} </div>
        <div className="earnings">{{ earnings | currency }}</div> */}
      </section>

      {/* Key Metrics */}
      <section className="metrics grid grid-cols-3 gap-4 mb-4 text-center">
        <div className="metric">
          <div className="value text-3xl font-bold">7</div>
          <div className="label text-sm text-gray-500">TRIPS</div>
        </div>
        <div className="metric">
          <div className="value text-3xl font-bold">{/* {onlineHours} */}4</div>
          <div className="label text-sm text-gray-500">ONLINE</div>
        </div>
        <div className="metric">
          <div className="value text-3xl font-bold">19</div>
          <div className="label text-sm text-gray-500">POINTS</div>
        </div>
      </section>

      {/* Earnings Breakdown */}
      <section className="earnings-breakdown mb-4">
        <div className="row flex justify-between py-2">
          <span>Trip Earnings</span>
          <span>$56.16</span>
        </div>
        <div className="row flex justify-between py-2">
          <span>Diamond Reward</span>
          <span>$2.62</span>
        </div>
        <div className="row flex justify-between py-2">
          <span>Toll</span>
          <span>$7.00</span>
        </div>
        <div className="row flex justify-between py-2">
          <span>Consecutive Trips Promotion</span>
          <span>$11.00</span>
        </div>

        <div className="row total flex justify-between py-2 font-bold border-t border-gray-300 mt-2 pt-2">
          <span>Total</span>
          <span>$76.78</span>
        </div>
      </section>

      {/* See Earnings Activity Button */}
      <div className="button-container text-center">
        <button className="earnings-button bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600">
          SEE EARNINGS ACTIVITY
        </button>
      </div>
    </div>
  );
}
