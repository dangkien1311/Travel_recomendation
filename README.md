# Travel Recommendation Website

A Booking.com-like travel recommendation website built with Django (backend) and React (frontend).

## Features

- **Search for travel destinations** - Enter destination, dates, and number of travelers
- **Hotel recommendations** - Find hotels with pricing, ratings, and amenities
- **Transport options** - View flights, trains, buses, and car rentals
- **Attractions & activities** - Discover things to do at your destination
- **Price summary** - See total trip cost with breakdown
- **Responsive design** - Works on desktop and mobile

## Tech Stack

### Backend
- **Django 4.2** - Python web framework
- **Django REST Framework** - API development
- **NeonDB (PostgreSQL)** - Cloud database
- **OpenTripMap API** - Free travel attractions API

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Axios** - HTTP client
- **Lucide React** - Icons

## Project Structure

```
Travel_recomendation/
├── backend/
│   ├── manage.py
│   ├── requirements.txt
│   ├── .env.example
│   ├── travel_api/
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   │   └── asgi.py
│   └── recommendations/
│       ├── __init__.py
│       ├── admin.py
│       ├── apps.py
│       ├── models.py
│       ├── serializers.py
│       ├── services.py
│       ├── urls.py
│       └── views.py
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── index.html
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── index.css
│       ├── services/
│       │   └── api.js
│       ├── components/
│       │   ├── Header.jsx
│       │   ├── Footer.jsx
│       │   ├── SearchForm.jsx
│       │   ├── HotelCard.jsx
│       │   ├── TransportCard.jsx
│       │   ├── AttractionCard.jsx
│       │   ├── PriceSummary.jsx
│       │   └── LoadingSpinner.jsx
│       └── pages/
│           ├── HomePage.jsx
│           └── SearchResultsPage.jsx
└── README.md
```

## Setup Instructions

### Prerequisites
- Python 3.10+
- Node.js 18+
- NeonDB account (free tier available)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   
   # Windows
   venv\Scripts\activate
   
   # macOS/Linux
   source venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create `.env` file from example:
   ```bash
   copy .env.example .env   # Windows
   cp .env.example .env     # macOS/Linux
   ```

5. Update `.env` with your credentials:
   - `DATABASE_URL`: Your NeonDB connection string
   - `OPENTRIPMAP_API_KEY`: Get free key from https://opentripmap.io/product
   - `SECRET_KEY`: Generate a secure secret key

6. Run migrations:
   ```bash
   python manage.py migrate
   ```

7. Create superuser (optional):
   ```bash
   python manage.py createsuperuser
   ```

8. Start the development server:
   ```bash
   python manage.py runserver
   ```

The API will be available at `http://localhost:8000/api/`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:3000`

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/` | GET | API information |
| `/api/health/` | GET | Health check |
| `/api/search/` | POST | Search for travel recommendations |
| `/api/destinations/` | GET | List destinations |
| `/api/destinations/popular/` | GET | Get popular destinations |
| `/api/hotels/` | GET | List hotels |
| `/api/transports/` | GET | List transport options |
| `/api/attractions/` | GET | List attractions |
| `/api/packages/` | GET | List travel packages |

### Search API Example

```bash
POST /api/search/
Content-Type: application/json

{
  "destination": "Paris",
  "check_in": "2024-03-01",
  "check_out": "2024-03-05",
  "people": 2,
  "rooms": 1
}
```

## Free APIs Used

1. **OpenTripMap** (https://opentripmap.io/)
   - Free tier: 100,000 requests/day
   - Used for: Tourist attractions data

2. **Amadeus API** (https://developers.amadeus.com/) - **NEW!**
   - Free tier: 500 requests/month
   - Used for: Real flight and hotel prices
   - See "Switching Data Sources" below

3. **Mock Services** (Default)
   - Hotels and transport use generated test data
   - Great for development and testing

## Switching Data Sources

The app supports multiple data sources that you can switch via the `API_MODE` environment variable:

### Available Modes

| Mode | Description | Requirements |
|------|-------------|--------------|
| `mock` | Generated test data (default) | None |
| `amadeus` | Real Amadeus API data | API keys required |
| `hybrid` | Amadeus for flights, mock for hotels | API keys required |

### Setting Up Amadeus API (Real Prices)

1. **Create a free account** at https://developers.amadeus.com/

2. **Create an app** in your Self-Service Workspace:
   - Go to "My Self-Service Workspace"
   - Click "Create new app"
   - Copy the **API Key** and **API Secret**

3. **Update your `.env` file**:
   ```bash
   # Switch to Amadeus mode
   API_MODE=amadeus
   
   # Add your API credentials
   AMADEUS_API_KEY=your_api_key_here
   AMADEUS_API_SECRET=your_api_secret_here
   ```

4. **Restart the Django server**

5. **Verify connection** - Visit: `http://localhost:8000/api/api-status/`

### Quick Mode Switching

```bash
# Use mock data (no API needed)
API_MODE=mock

# Use Amadeus for everything
API_MODE=amadeus

# Use Amadeus for flights only
API_MODE=hybrid
```

### Amadeus Free Tier Limits
- 500 API calls per month
- Access to test environment
- Flight & Hotel search APIs
- Perfect for development

## Database (NeonDB)

NeonDB is a serverless PostgreSQL database with a generous free tier:
- 0.5 GB storage
- 100 hours compute/month
- Perfect for development and small projects

Sign up at: https://neon.tech

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `SECRET_KEY` | Django secret key | Yes |
| `DEBUG` | Debug mode (True/False) | No |
| `DATABASE_URL` | NeonDB PostgreSQL connection string | Yes |
| `API_MODE` | Data source: `mock`, `amadeus`, or `hybrid` | No (default: mock) |
| `AMADEUS_API_KEY` | Amadeus API key | For amadeus/hybrid mode |
| `AMADEUS_API_SECRET` | Amadeus API secret | For amadeus/hybrid mode |
| `OPENTRIPMAP_API_KEY` | OpenTripMap API key | No (for attractions) |
| `ALLOWED_HOSTS` | Comma-separated list of allowed hosts | No |

## License

MIT License
