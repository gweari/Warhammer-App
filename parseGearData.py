"""
HTML Gear Data Parser for Warhammer RoR
Parses the community spreadsheet HTML and generates JavaScript gear data
"""

from bs4 import BeautifulSoup
import json
import re

def parse_html_gear_data(html_file):
    """Parse the HTML table and extract gear data"""
    
    with open(html_file, 'r', encoding='utf-8') as f:
        html = f.read()
    
    soup = BeautifulSoup(html, 'html.parser')
    table = soup.find('table', class_='waffle')
    
    if not table:
        print("Error: Could not find table in HTML")
        return {}
    
    rows = table.find_all('tr')
    gear_data = {}
    
    # Parse header row to get column indices
    header_row = rows[0]
    headers = [th.get_text(strip=True) for th in header_row.find_all(['th', 'td'])]
    
    print(f"Found {len(headers)} columns")
    print(f"Headers: {headers[:10]}")  # Print first 10 headers
    
    # Map column names to indices
    col_map = {
        'Type': None,
        'Class': None,
        'Sets': None,
        'Piece': None,
        'Armor': None,
        'Toughness': None,
        'Initiative': None,
        'Wounds': None,
        'Weapon Skill': None,
        'Strength': None,
        'Intelligence': None,
        'Willpower': None,
        'Ballistic skill': None,
        'Spiritual Resistance': None,
        'Elemental Resistance': None,
        'Corporeal Resistance': None,
        'Item bonus 1': None,
        'Item bonus 2': None,
        'Item bonus 3': None,
        'Level': None,
        'Renown Rank': None
    }
    
    for i, header in enumerate(headers):
        if header in col_map:
            col_map[header] = i
    
    print(f"\\nColumn mapping: {col_map}")
    
    # Parse data rows (skip header rows)
    data_rows = []
    for row in rows[2:]:  # Skip first 2 rows (header + freeze bar)
        cells = row.find_all('td')
        if len(cells) < 10:
            continue
        
        row_data = [cell.get_text(strip=True) for cell in cells]
        if not row_data[0]:  # Skip empty rows
            continue
        
        data_rows.append(row_data)
    
    print(f"\\nFound {len(data_rows)} data rows")
    
    # Group by class and set
    for row_data in data_rows[:10]:  # Print first 10 rows as sample
        gear_type = row_data[col_map['Type']] if col_map['Type'] is not None else ''
        class_name = row_data[col_map['Class']] if col_map['Class'] is not None else ''
        set_name = row_data[col_map['Sets']] if col_map['Sets'] is not None else ''
        piece_name = row_data[col_map['Piece']] if col_map['Piece'] is not None else ''
        
        print(f"Type: {gear_type}, Class: {class_name}, Set: {set_name}, Piece: {piece_name}")
    
    return gear_data

if __name__ == '__main__':
    html_file = 'tool from web/Data.html'
    gear_data = parse_html_gear_data(html_file)
    
    print(f"\\nParsing complete. Found {len(gear_data)} unique sets")
