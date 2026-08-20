# Images go in this folder: public/images/

This is a Vite **public** folder — anything placed here is served from the
site root as-is (e.g. `public/images/hero-dish.jpg` → `/images/hero-dish.jpg`),
so it works in both `npm run dev` and a production build. Don't put images
in `src/` and reference them as a plain string path — Vite won't bundle
them for production that way.

Export these frames from your Figma file (right-click → Export, PNG or JPG)
and drop them in here with these exact names — components already point at
these paths:

- logo.png                (TasteNest logo image, used in the header)
- hero-dish.jpg           (hero banner steak photo)
- hero-pizza.jpg          (small "Sicilian Pizza" circle photo)
- about-restaurant.jpg
- about-cocktail.jpg
- about-dining.jpg
- author.jpg              (Willimes James headshot)
- bbq-plate.jpg           (grilled chicken plate, circular)
- discover-steaks.jpg
- discover-cocktails.jpg
- dish-fried-chicken.jpg
- dish-burger.jpg
- dish-coffee.jpg
- dish-pizza.jpg
- testimonial-1.jpg       (coffee cup photo, top-right of the collage)
- testimonial-2.jpg       (dessert photo, bottom-right of the collage)
- chef-thomas.jpg
- chef-james.jpg
- chef-room.jpg
- app-bike.jpg            (delivery rider on scooter — App Promo, bottom-left)
- app-phone.jpg           (phone in hand — App Promo, center)
- app-pizza.jpg           (pizza — App Promo, top-right)
- app-bowl.jpg            (bowl of food — App Promo, bottom-right)
- news-alfredo.jpg
- news-salmon.jpg
- avatar-willimes.jpg     (small round author avatar on both news cards)
- instagram-bg.jpg        (single full-width background photo behind the
                            "Follow @shawonetc3" section)
- footer-decor-left.png   (decorative illustration, left corner of footer —
                            needs a transparent background)
- footer-decor-right.png  (decorative illustration, right corner of footer —
                            needs a transparent background)

Until you add real images, the <img> tags will just show broken-image
icons — everything else (layout, responsiveness, interactions) works fine
without them.
