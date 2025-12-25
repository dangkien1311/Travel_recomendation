import { DollarSign, Hotel, Plane, Camera, Calculator, ArrowRight } from 'lucide-react';

function PriceSummary({ summary, selectedHotel, selectedTransport, selectedAttractions = [] }) {
  const { trip_details, price_breakdown } = summary;
  
  // Calculate actual selected prices
  const hotelTotal = selectedHotel 
    ? selectedHotel.price_per_night * trip_details.nights * trip_details.rooms 
    : price_breakdown.hotel_min;
  
  const transportTotal = selectedTransport 
    ? selectedTransport.price_per_person * trip_details.people 
    : price_breakdown.transport_min;
  
  const attractionsTotal = selectedAttractions.length > 0
    ? selectedAttractions.reduce((sum, a) => sum + (a.price_per_person * trip_details.people), 0)
    : price_breakdown.attractions_estimated;
  
  const grandTotal = hotelTotal + transportTotal + attractionsTotal;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Calculator className="w-5 h-5" />
        Trip Summary
      </h2>

      {/* Route Display */}
      {(trip_details.origin || summary.origin?.name) && (
        <div className="flex items-center justify-center gap-2 mb-4 p-3 bg-primary-50 rounded-lg text-primary-700 font-medium">
          <span>{trip_details.origin || summary.origin?.name || 'Your City'}</span>
          <ArrowRight className="w-4 h-4" />
          <span>{summary.destination?.name}</span>
        </div>
      )}

      {/* Trip Details */}
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <h3 className="font-semibold text-gray-700 mb-2">Trip Details</h3>
        <div className="space-y-1 text-sm text-gray-600">
          {(trip_details.origin && trip_details.origin !== 'Not specified') && (
            <p><strong>From:</strong> {trip_details.origin}</p>
          )}
          <p><strong>To:</strong> {summary.destination?.name}</p>
          <p><strong>Check-in:</strong> {trip_details.check_in}</p>
          <p><strong>Check-out:</strong> {trip_details.check_out}</p>
          <p><strong>Duration:</strong> {trip_details.nights} night{trip_details.nights > 1 ? 's' : ''}</p>
          <p><strong>Travelers:</strong> {trip_details.people} guest{trip_details.people > 1 ? 's' : ''}</p>
          <p><strong>Rooms:</strong> {trip_details.rooms}</p>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-3 mb-4">
        <h3 className="font-semibold text-gray-700">Price Breakdown</h3>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Hotel className="w-4 h-4 text-primary-500" />
            <span>Accommodation</span>
          </div>
          <span className="font-medium">${hotelTotal.toFixed(2)}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Plane className="w-4 h-4 text-primary-500" />
            <span>Transport</span>
          </div>
          <span className="font-medium">${transportTotal.toFixed(2)}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-primary-500" />
            <span>Attractions</span>
          </div>
          <span className="font-medium">${attractionsTotal.toFixed(2)}</span>
        </div>
      </div>

      {/* Total */}
      <div className="border-t border-gray-200 pt-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">Total</span>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary-500">
              ${grandTotal.toFixed(2)}
            </div>
            <span className="text-xs text-gray-500">{price_breakdown.currency}</span>
          </div>
        </div>
        
        <p className="text-xs text-gray-500 mt-2">
          *Prices shown are estimates. Final prices may vary.
        </p>
      </div>

      {/* Book Button */}
      <button className="w-full mt-4 bg-accent-500 text-gray-900 py-3 rounded-lg font-bold hover:bg-accent-600 transition-colors flex items-center justify-center gap-2">
        <DollarSign className="w-5 h-5" />
        Book Now
      </button>
    </div>
  );
}

export default PriceSummary;
