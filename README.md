# Crypto Illiquid Token Visualizer

This project provides an interactive web application to visualize the historical price and trading volume of illiquid crypto tokens, helping traders and analysts understand the market behavior of less-traded tokens.

## Features

- Interactive charts for price and volume
- Filter data by date range
- Support for offline CSV data or real-time CoinGecko API
- Simple React frontend with Chart.js
- Optional Python preprocessing script for offline data

## All-in-One Installation, Usage, Backend, Guide, and Notes

```bash
# 1. Clone the repository
git clone https://github.com/arawrdn/crypto-illiquid-token-visualizer.git
cd crypto-illiquid-token-visualizer

# 2. Install frontend dependencies
npm install

# 3. Optional: Install Python dependencies for offline CSV processing
pip install pandas requests

# 4. Frontend Usage
npm run dev
# Open your browser at http://localhost:5173

# 5. Backend / Offline CSV Processing
# If your token data is not available via API, prepare CSV with columns: timestamp, price, volume
python scripts/process_csv.py
# This will generate src/data/sample.json for frontend

# 6. Guide
# - Fetch data using CoinGecko API for available tokens
# - For offline tokens, prepare CSV as mentioned above
# - Run Python script to convert CSV to JSON
# - Open frontend, select token and date range to visualize charts
# - Optional: Toggle AI anomaly detection (experimental)

# 7. Notes
# - Educational and analytical purposes only, not financial advice
# - CoinGecko API rate limits may apply
# - Offline CSV ensures visualization for tokens not on API
# - Charts show dual-axis: price (USD) and volume
# - Validate data accuracy before making decisions
