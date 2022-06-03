/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['links.papareact.com'],
  },
  env:{
    mapbox_key:'pk.eyJ1IjoidmFsaS1ydXppYm9ldiIsImEiOiJja3U4d2pkdmEwMTc0MnVwZzRlMm92M2hlIn0.1W4hEgLrDfEMJQRsmD6RUw'
  }
}

module.exports = nextConfig
