import { defineQuery } from 'next-sanity'

// This fetches ALL projects when you first land on the gallery
export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project"]{
    _id,
    title,
    location,
    material,
    "imageUrl": gallery[0].asset->url
  }
`)

// This fetches only the material you click on (like Hardwood)
export const PROJECTS_BY_MATERIAL_QUERY = defineQuery(`
  *[_type == "project" && material == $category]{
    _id,
    title,
    location,
    material,
    "imageUrl": gallery[0].asset->url
  }
`)