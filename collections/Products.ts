import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  fields: [
    {
      name: "name_fr",
      label: "Nom (Français)",
      type: 'text',
      required: true
    },
    {
      name: "name_ar",
      label: "الاسم (العربية)",
      type: 'text',
      required: true
    },
    {
      name: 'ref',
      label: 'Référence',
      type: "text",
      required: true
    },
    {
      name: "prix",
      label: "Prix",
      required: true,
      type: "number"
    },
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: 'media',
      required: false
    }
  ],
}
