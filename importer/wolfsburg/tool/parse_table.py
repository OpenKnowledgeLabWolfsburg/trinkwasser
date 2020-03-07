from bs4 import BeautifulSoup
import requests
import pandas as pd
import csv
import datetime

def get_html(url):
  res = requests.get(url)
  if res.status_code == 200:
    return res.content

def parse_html(html_doc):
  output = dict()

  location_root_elements = html_doc.select('div.accordion-wrapper')

  for location_root in location_root_elements:
    location = location_root.select('div.header > span.text')[0].text.strip()
    table = location_root.select('table.contenttable')[0]
    headers = [header_elem.text for header_elem in table.find_all('th')]
    rows = table.select('tbody > tr')
    data_rows = [[value.text for value in row.find_all('td')] for row in rows]

    output[location] = dict()
    output[location]['header'] = headers
    output[location]['data'] = {row[0]: row[2] for row in data_rows if len(row)==3}
  
  return output

def write_csv(data, filename='output.csv'):
  with open(filename, 'w', newline='') as csvfile:
    fieldnames = ['CITY', 'DISTRICT', 'TIMESTAMP', 'SULFATE', 'CHLORIDE', 'NATRIUM', 'HARDNESS', 'NITRATE', 'MAGNESIUM', 'CALCIUM', 'POTASSIUM']
    writer = csv.writer(csvfile, dialect='excel', delimiter=';')
    
    city = 'Wolfsburg'
    timestamp = datetime.datetime.now().isoformat()
    writer.writerow(fieldnames)
    for district, data in data.items():
      data = data['data']
      writer.writerow([city, district, timestamp, '', data.get('Chlorid', ''), '', data.get('Gesamthärte', ''), data.get('Nitrat', ''), data.get('Magnesium', ''), data.get('Calcium', ''), data.get('Kalium', '')])
  

if __name__ == '__main__':
  html_doc = BeautifulSoup(get_html('https://www.lsw-netz.de/wasser/wasserqualitaet/'), 'html.parser')
  data = parse_html(html_doc)
  write_csv(data)