import {Inter, Lusitana} from 'next/font/google';
import { Poppins } from 'next/font/google';
// inter
export const inter = Inter({subsets : ['latin']});

// poppin
export const poppins = Poppins({
    weight : ['500', '700', '400'],
    subsets : ['latin']
})

export const lusitana = Lusitana({
    weight : ['400', '700'],
    subsets : ['latin']
})
