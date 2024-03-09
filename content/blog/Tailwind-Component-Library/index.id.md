---
title: "Tailwind Component Library"
date: 2024-03-09T07:45:04+07:00
slug: Tailwind-Component
category: tailwind
tags: [tailwind]
summary:
description: Same as the summary
cover:
  image:
  alt:
  caption:
  relative: false
showtoc: true
draft: false
---

## Apa itu tailwind?
tailwind adalah sebuah frameowork css yang memudahkan proses styling website kita, nah tailwind ini memiliki konsep utility first yang artinya tailwind css berfokus utility seperti flex, text-center, padding dan margin. Hal ini cukup menguntungkan bagi developer untuk menggunakan tailwind diataranya: 
- efesiensi penulisan kode
- mempercepat penulisan kode
- mempermudah membuat web yang responsive

Namun dalam penggunaannya seringkali mengalami beberapa kesulitan diataranya
- kode yang terlalu panjang, hal ini dikarekana sebuah element terkadang membutuhkan banyak utility sehingga nama class menjadi panjang
- Potensi desain yang tidak konsisten, hal ini dikarenakan tailwind sangat bebas sekali digunakan terkadang developer tidak memiliki kemampuan desain yang baik sehingga terjadi ketidakkonsistenan desain.

## Tailwind Komponent Library
untuk menyelesaikan beberapa masalah diatas ada banyak developer yang membuat sebuah komponen library untuk tailwind css, berikut 5 tailwind konponent yang paling sering digunakan:

### [1. Tailwind UI](https://tailwindui.com/)
Tailwind UI merupakan library komponent resmi dari Tailwind CSS. Library ini menyediakan berbagai macam komponent UI yang siap pakai, seperti tombol, formulir, card, dan modal. Tailwind UI juga menyediakan berbagai macam contoh penggunaan komponent yang dapat membantu developer untuk mempelajari cara menggunakan library ini.

Contoh:
```html
<button href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</button>
```

### [2. Daisy UI](https://daisyui.com/)
DaisyUI merupakan library komponent Tailwind CSS yang populer dengan desainnya yang modern dan clean. Library ini menyediakan berbagai macam komponent UI yang siap pakai, seperti tombol, formulir, card, dan modal. DaisyUI juga menyediakan berbagai macam tema dan plugin yang dapat membantu developer untuk menyesuaikan tampilan UI mereka.

Contoh:
```html
<button class="btn">Button</button>
``` 

### [3. Flowbite](https://flowbite.com/docs/getting-started/introduction/)

Flowbite merupakan library komponent Tailwind CSS yang populer dengan desainnya yang responsif dan mobile-friendly. Library ini menyediakan berbagai macam komponent UI yang siap pakai, seperti tombol, formulir, card, dan modal. Flowbite juga menyediakan berbagai macam contoh penggunaan komponent yang dapat membantu developer untuk mempelajari cara menggunakan library ini.

Contoh:
```html
<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Button</button>
```

### [4. Shadcn UI](https://ui.shadcn.com/)
shadcn UI adalah kumpulan komponen UI yang dirancang dengan indah dan dapat langsung digunakan di aplikasi. Namun shadcn ui ini menggunakan react js, jadi anda harus paham terkait react js sebelum bisa menggunakannya. Namun shadcn ui juga memiliki framework alternatif lain selain react yaitu [vue](http://vuejs.org/) dengan [shadcn-vue](https://www.shadcn-vue.com/) dan [svelte](https://svelte.dev/) dengan [shadcn-svelte](https://www.shadcn-svelte.com/)

Contoh:

```jsx
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <>
      <Button variant="outline">Button</Button>
    </>
  );
}
```

### [5. SaaS Blocks](https://saasblocks.app/)
Mirip seperti shadcn yang menggunakan react dan flowbite yang menggunakan full tailwind utility (tidak seperti daisy ui yang menggunakan semantic class name) Sass block menyediakan puluhan tailwind komponent yang gratis serta mudah di kostumisasi

Contoh:
```jsx
export default function Page() {
  return (
    <>
      <button className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-primary bg-primary px-3 py-2 text-xs font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80">
        Button
      </button>
    </>
  );
}
```

## Penutup 
sekian artikel terkait 5 library tailwind komponen, semoga bermanfaat.