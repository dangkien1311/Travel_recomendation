# 🌍 Travel Recommendation Website# Travel Recommendation Website



A Booking.com-like travel recommendation website built with Django (backend) and React (frontend). Search for destinations, find hotels, book flights, discover attractions, and get a complete trip price summary.A Booking.com-like travel recommendation website built with Django (backend) and React (frontend).



![Travel Recommendation](https://img.shields.io/badge/Status-Active-success)## Features

![Django](https://img.shields.io/badge/Django-4.2-green)

![React](https://img.shields.io/badge/React-18-blue)- **Search for travel destinations** - Enter destination, dates, and number of travelers

![License](https://img.shields.io/badge/License-MIT-yellow)- **Hotel recommendations** - Find hotels with pricing, ratings, and amenities

- **Transport options** - View flights, trains, buses, and car rentals

## ✨ Features- **Attractions & activities** - Discover things to do at your destination

- **Price summary** - See total trip cost with breakdown

### Core Features- **Responsive design** - Works on desktop and mobile

- 🔍 **Smart Search** - Enter origin, destination, dates, travelers, and budget

- 🏨 **Hotel Recommendations** - Find hotels with pricing, ratings, amenities, and photos## Tech Stack

- ✈️ **Flight Search** - View flight options (prioritized over other transport)

- 🚗 **Local Transport** - Car rentals, taxis, metro passes for getting around### Backend

- 📸 **Attractions** - Discover things to do at your destination- **Django 4.2** - Python web framework

- 💰 **Price Summary** - Real-time trip cost breakdown- **Django REST Framework** - API development

- **NeonDB (PostgreSQL)** - Cloud database

### Advanced Features- **OpenTripMap API** - Free travel attractions API

- 🤖 **Smart Travel Planner** - AI-powered itinerary generation

- 🎯 **Multiple Travel Styles** - Nature, Culture, Food, Adventure, Relaxation### Frontend

- 💵 **Budget Filter** - Filter results by your budget- **React 18** - UI library

- 🔄 **Amadeus API Integration** - Real flight and hotel data (optional)- **Vite** - Build tool

- **Tailwind CSS** - Styling

## 🛠️ Tech Stack- **React Router** - Navigation

- **Axios** - HTTP client

### Backend- **Lucide React** - Icons

| Technology | Purpose |

|------------|---------|## Project Structure

| Django 4.2 | Python web framework |

| Django REST Framework | API development |```

| NeonDB (PostgreSQL) | Cloud database |Travel_recomendation/

| Amadeus API | Real flight/hotel data (optional) |├── backend/

│   ├── manage.py

### Frontend│   ├── requirements.txt

| Technology | Purpose |│   ├── .env.example

|------------|---------|│   ├── travel_api/

| React 18 | UI library |│   │   ├── __init__.py

| Vite | Build tool |│   │   ├── settings.py

| Tailwind CSS | Styling |│   │   ├── urls.py

| React Router | Navigation |│   │   ├── wsgi.py

| Axios | HTTP client |│   │   └── asgi.py

| Lucide React | Icons |│   └── recommendations/

| date-fns | Date formatting |│       ├── __init__.py

│       ├── admin.py

## 📁 Project Structure│       ├── apps.py

│       ├── models.py

```│       ├── serializers.py

Travel_recomendation/│       ├── services.py

├── backend/│       ├── urls.py

│   ├── manage.py│       └── views.py

│   ├── requirements.txt├── frontend/

│   ├── .env│   ├── package.json

│   ├── travel_api/│   ├── vite.config.js

│   │   ├── settings.py│   ├── tailwind.config.js

│   │   ├── urls.py│   ├── postcss.config.js

│   │   └── wsgi.py│   ├── index.html

│   └── recommendations/│   └── src/

│       ├── models.py          # Database models│       ├── main.jsx

│       ├── serializers.py     # API serializers│       ├── App.jsx

│       ├── services.py        # Mock data services│       ├── index.css

│       ├── amadeus_service.py # Amadeus API integration│       ├── services/

│       ├── ai_planner_service.py # Smart travel planner│       │   └── api.js

│       ├── urls.py│       ├── components/

│       └── views.py│       │   ├── Header.jsx

││       │   ├── Footer.jsx

├── frontend/│       │   ├── SearchForm.jsx

│   ├── package.json│       │   ├── HotelCard.jsx

│   ├── vite.config.js│       │   ├── TransportCard.jsx

│   ├── tailwind.config.js│       │   ├── AttractionCard.jsx

│   └── src/│       │   ├── PriceSummary.jsx

│       ├── main.jsx│       │   └── LoadingSpinner.jsx

│       ├── App.jsx│       └── pages/

│       ├── index.css│           ├── HomePage.jsx

│       ├── services/│           └── SearchResultsPage.jsx

│       │   └── api.js└── README.md

│       ├── components/```

│       │   ├── Header.jsx

│       │   ├── Footer.jsx## Setup Instructions

│       │   ├── SearchForm.jsx

│       │   ├── HotelCard.jsx### Prerequisites

│       │   ├── TransportCard.jsx- Python 3.10+

│       │   ├── LocalTransportCard.jsx- Node.js 18+

│       │   ├── AttractionCard.jsx- NeonDB account (free tier available)

│       │   ├── PriceSummary.jsx

│       │   ├── AdvancedSearchModal.jsx### Backend Setup

│       │   ├── TravelPlanModal.jsx

│       │   └── LoadingSpinner.jsx1. Navigate to the backend directory:

│       └── pages/   ```bash

│           ├── HomePage.jsx   cd backend

│           └── SearchResultsPage.jsx   ```

│

└── README.md2. Create a virtual environment:

```   ```bash

   python -m venv venv

## 🚀 Quick Start   

   # Windows

### Prerequisites   venv\Scripts\activate

- Python 3.10+   

- Node.js 18+   # macOS/Linux

- NeonDB account (free tier) or local PostgreSQL   source venv/bin/activate

   ```

### Backend Setup

3. Install dependencies:

```bash   ```bash

# 1. Navigate to backend   pip install -r requirements.txt

cd backend   ```



# 2. Create virtual environment4. Create `.env` file from example:

python -m venv venv   ```bash

   copy .env.example .env   # Windows

# Windows   cp .env.example .env     # macOS/Linux

venv\Scripts\activate   ```



# macOS/Linux5. Update `.env` with your credentials:

source venv/bin/activate   - `DATABASE_URL`: Your NeonDB connection string

   - `OPENTRIPMAP_API_KEY`: Get free key from https://opentripmap.io/product

# 3. Install dependencies   - `SECRET_KEY`: Generate a secure secret key

pip install -r requirements.txt

6. Run migrations:

# 4. Create .env file (copy from .env.example or create new)   ```bash

# Add your DATABASE_URL and optional API keys   python manage.py migrate

   ```

# 5. Run migrations

python manage.py migrate7. Create superuser (optional):

   ```bash

# 6. Start server   python manage.py createsuperuser

python manage.py runserver   ```

```

8. Start the development server:

Backend API: `http://localhost:8000/api/`   ```bash

   python manage.py runserver

### Frontend Setup   ```



```bashThe API will be available at `http://localhost:8000/api/`

# 1. Navigate to frontend

cd frontend### Frontend Setup



# 2. Install dependencies1. Navigate to the frontend directory:

npm install   ```bash

   cd frontend

# 3. Start development server   ```

npm run dev

```2. Install dependencies:

   ```bash

Frontend: `http://localhost:5173`   npm install

   ```

## ⚙️ Configuration

3. Start the development server:

### Environment Variables (.env)   ```bash

   npm run dev

```bash   ```

# Django

SECRET_KEY=your-secret-keyThe app will be available at `http://localhost:3000`

DEBUG=True

ALLOWED_HOSTS=localhost,127.0.0.1## API Endpoints



# Database (NeonDB PostgreSQL)| Endpoint | Method | Description |

DATABASE_URL=postgresql://user:pass@host/db?sslmode=require|----------|--------|-------------|

| `/api/` | GET | API information |

# API Mode: 'mock', 'amadeus', or 'hybrid'| `/api/health/` | GET | Health check |

API_MODE=mock| `/api/search/` | POST | Search for travel recommendations |

| `/api/destinations/` | GET | List destinations |

# Amadeus API (optional - for real flight/hotel data)| `/api/destinations/popular/` | GET | Get popular destinations |

AMADEUS_API_KEY=your_key| `/api/hotels/` | GET | List hotels |

AMADEUS_API_SECRET=your_secret| `/api/transports/` | GET | List transport options |

AMADEUS_PRODUCTION=False| `/api/attractions/` | GET | List attractions |

```| `/api/packages/` | GET | List travel packages |



### API Modes### Search API Example



| Mode | Description |```bash

|------|-------------|POST /api/search/

| `mock` | Uses generated test data (default, no API keys needed) |Content-Type: application/json

| `amadeus` | Uses real Amadeus API for flights and hotels |

| `hybrid` | Amadeus for flights, mock for hotels/attractions |{

  "destination": "Paris",

## 📡 API Endpoints  "check_in": "2024-03-01",

  "check_out": "2024-03-05",

### Search & Recommendations  "people": 2,

  "rooms": 1

| Method | Endpoint | Description |}

|--------|----------|-------------|```

| POST | `/api/search/` | Search for travel recommendations |

| GET | `/api/destinations/` | List all destinations |## Free APIs Used

| GET | `/api/destinations/popular/` | Get popular destinations |

| GET | `/api/hotels/` | List hotels |1. **OpenTripMap** (https://opentripmap.io/)

| GET | `/api/transports/` | List transport options |   - Free tier: 100,000 requests/day

| GET | `/api/attractions/` | List attractions |   - Used for: Tourist attractions data



### Smart Planner2. **Amadeus API** (https://developers.amadeus.com/) - **NEW!**

   - Free tier: 500 requests/month

| Method | Endpoint | Description |   - Used for: Real flight and hotel prices

|--------|----------|-------------|   - See "Switching Data Sources" below

| GET | `/api/ai-planner/` | Get planner questions |

| POST | `/api/ai-planner/` | Generate travel plan |3. **Mock Services** (Default)

| GET | `/api/ai-planner/status/` | Check planner status |   - Hotels and transport use generated test data

   - Great for development and testing

### Search Request Example

## Switching Data Sources

```json

POST /api/search/The app supports multiple data sources that you can switch via the `API_MODE` environment variable:

{

  "origin": "New York",### Available Modes

  "destination": "Paris",

  "check_in": "2025-01-15",| Mode | Description | Requirements |

  "check_out": "2025-01-22",|------|-------------|--------------|

  "people": 2,| `mock` | Generated test data (default) | None |

  "rooms": 1,| `amadeus` | Real Amadeus API data | API keys required |

  "budget": 3000| `hybrid` | Amadeus for flights, mock for hotels | API keys required |

}

```### Setting Up Amadeus API (Real Prices)



### Search Response1. **Create a free account** at https://developers.amadeus.com/



```json2. **Create an app** in your Self-Service Workspace:

{   - Go to "My Self-Service Workspace"

  "summary": {   - Click "Create new app"

    "destination": { "name": "Paris" },   - Copy the **API Key** and **API Secret**

    "trip_details": { "nights": 7, "people": 2 },

    "price_breakdown": {3. **Update your `.env` file**:

      "hotel_min": 840,   ```bash

      "transport_min": 400,   # Switch to Amadeus mode

      "local_transport_min": 70,   API_MODE=amadeus

      "attractions_estimated": 120,   

      "total_min": 1430   # Add your API credentials

    }   AMADEUS_API_KEY=your_api_key_here

  },   AMADEUS_API_SECRET=your_api_secret_here

  "hotels": [...],   ```

  "transports": [...],        // Flights only (inter-city)

  "local_transports": [...],  // Car rental, taxi, metro4. **Restart the Django server**

  "attractions": [...]

}5. **Verify connection** - Visit: `http://localhost:8000/api/api-status/`

```

### Quick Mode Switching

## 🎯 Transport Logic

```bash

### Getting There (Inter-city)# Use mock data (no API needed)

**Flights are prioritized** for travel between cities:API_MODE=mock

- Economy Flight

- Economy Plus Flight  # Use Amadeus for everything

- Premium Economy FlightAPI_MODE=amadeus

- Business Class Flight

- First Class Flight# Use Amadeus for flights only

API_MODE=hybrid

### Getting Around (Local)```

Local transport options at the destination:

- Car Rental (Economy, SUV, Luxury)### Amadeus Free Tier Limits

- Airport Transfer / Private Driver- 500 API calls per month

- Metro Day Pass / Weekly Pass- Access to test environment

- Bike / Scooter Rental- Flight & Hotel search APIs

- Hotel Shuttle (free)- Perfect for development



## 🤖 Smart Travel Planner## Database (NeonDB)



The Smart Travel Planner generates personalized itineraries based on:NeonDB is a serverless PostgreSQL database with a generous free tier:

1. **Origin** - Where you're traveling from- 0.5 GB storage

2. **Destination** - Where you want to go- 100 hours compute/month

3. **Travel Styles** - Select multiple: Nature, Culture, Food, Adventure, Relaxation- Perfect for development and small projects

4. **Duration** - Number of days

5. **Travelers** - Number of peopleSign up at: https://neon.tech

6. **Budget** - Total trip budget

## Environment Variables

### Generated Plan Includes:

- Day-by-day itinerary with morning/afternoon/evening activities| Variable | Description | Required |

- Recommended hotel based on budget|----------|-------------|----------|

- Flight options| `SECRET_KEY` | Django secret key | Yes |

- Top attractions to visit| `DEBUG` | Debug mode (True/False) | No |

- Cost breakdown| `DATABASE_URL` | NeonDB PostgreSQL connection string | Yes |

- Travel tips| `API_MODE` | Data source: `mock`, `amadeus`, or `hybrid` | No (default: mock) |

| `AMADEUS_API_KEY` | Amadeus API key | For amadeus/hybrid mode |

## 🧪 Testing| `AMADEUS_API_SECRET` | Amadeus API secret | For amadeus/hybrid mode |

| `OPENTRIPMAP_API_KEY` | OpenTripMap API key | No (for attractions) |

```bash| `ALLOWED_HOSTS` | Comma-separated list of allowed hosts | No |

# Backend tests

cd backend## License

python manage.py test

MIT License

# Frontend (if tests are set up)
cd frontend
npm run test
```

## 📱 Screenshots

### Home Page
- Hero section with search form
- Popular destinations
- Smart Travel Planner button

### Search Results
- Tabbed interface: Hotels | Getting There | Getting Around | Attractions
- Real-time price summary sidebar
- Click to select options

### Smart Planner
- Step-by-step wizard
- Multiple travel style selection
- Generated itinerary view

## 🔧 Development

### Adding New Transport Types

Edit `backend/recommendations/services.py`:

```python
FLIGHT_OPTIONS = [
    {'type': 'flight', 'name': 'New Flight Type', 'base_price': 300, 'duration_range': (60, 180)},
]
```

### Adding New Travel Styles

Edit `backend/recommendations/ai_planner_service.py`:

```python
TRAVEL_TYPES = {
    'new_style': {
        'description': 'Description here',
        'morning_activities': [...],
        'afternoon_activities': [...],
        'evening_activities': [...]
    }
}
```

## 📄 License

MIT License - feel free to use this project for learning or commercial purposes.

## 🙏 Acknowledgments

- [Amadeus for Developers](https://developers.amadeus.com/) - Travel API
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide](https://lucide.dev/) - Icons
- [NeonDB](https://neon.tech/) - Database hosting

---

**Built with ❤️ by dangkien1311**
