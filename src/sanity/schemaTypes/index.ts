import { type SchemaTypeDefinition } from 'sanity'
import Category from './category'
import chef from './chef'
import menuItems from './menuItems'
import food from './food'
import menu from './menu'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Category, chef, food, menuItems, menu],
}
