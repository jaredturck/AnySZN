import geoip2.database, geoip2.errors

GEOIP_DB_PATH = '/home/jared/Documents/Dropdown Documents/ANYHJS/backend/GeoLite2-Country.mmdb'

reader = geoip2.database.Reader(GEOIP_DB_PATH)

def get_country_for_ip(ip):
    try:
        response = reader.country(ip)
        print(response.to_dict())
    except (geoip2.errors.AddressNotFoundError, ValueError):
        return None

    if not response.country.iso_code:
        return None

    return {
        'iso_code': response.country.iso_code,
        'name': response.country.name,
        'continent_code' : response.continent.code
    }

print(get_country_for_ip('176.26.201.71'))
