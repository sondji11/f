import { Produits } from '../models/produits';

export interface Details{
    burgers?:Produits
    menus?:Produits
    tailles :Produits[]
    portionfrites:Produits[]
    produit:Produits
}