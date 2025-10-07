import pandas as pd
import json

# Read the CSV file
df = pd.read_csv('data/sample.csv', parse_dates=['timestamp'])

# Optional: Clean or filter data
df = df[['timestamp', 'price', 'volume']]

# Save to JSON for frontend
df.to_json('src/data/sample.json', orient='records', date_format='iso')
print("Processed CSV saved to src/data/sample.json")
