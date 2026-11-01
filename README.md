# Modern Digital Clock

A clean, neon-styled digital clock built with plain HTML, CSS, and JavaScript. It shows the current time and date, and lets you switch between several world time zones instantly. No frameworks, no build step, no dependencies.

## Features

- **Live 12-hour clock** with hours, minutes, seconds, and AM/PM, updated every second
- **Time zone selector** for quick switching between locations
- **Full date display** (e.g. "Sunday, November 1, 2026") that follows the selected time zone
- **Location badge** showing the currently selected location
- **Blinking colon separators** for a classic digital-clock feel
- **Responsive layout** that scales to different screen sizes
- **Monospace font** so the layout stays stable as digits change

## Supported Time Zones

| Option | IANA Identifier |
| --- | --- |
| Select Location (your device's local time) | local |
| New York (EST/EDT) | `America/New_York` |
| London (GMT/BST) | `Europe/London` |
| Tokyo (JST) | `Asia/Tokyo` |
| Sydney (AEST/AEDT) | `Australia/Sydney` |
| India (IST) | `Asia/Kolkata` |

Daylight saving changes are handled automatically by the browser's `Intl` support.

## Project Structure

```
.
├── index.html   # Page structure and time zone dropdown
├── script.js    # Clock logic and time zone handling
└── style.css    # Theme, layout, and animations
```

## Getting Started

1. Download or clone the project so all three files are in the same folder.
2. Open `index.html` in any modern web browser.

That's it. No installation or server is required.

Optionally, you can serve it locally:

```bash
# Python 3
python -m http.server 8000
# then visit http://localhost:8000
```

## How It Works

1. `updateClock()` creates a new `Date` object and reads the selected value from the dropdown.
2. If a specific time zone is chosen, it is passed as the `timeZone` option to `toLocaleTimeString()` and `toLocaleDateString()`. Otherwise the device's local time zone is used.
3. The formatted time string (e.g. `03:45:12 PM`) is split into hours, minutes, seconds, and AM/PM, and each part is written to its own element.
4. The function runs once on load, again whenever the dropdown changes, and then every second via `setInterval`.

## Customization

**Add a time zone:** add an `<option>` to the dropdown in `index.html` using any valid [IANA time zone name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones):

```html
<option value="Europe/Paris">Paris (CET/CEST)</option>
```

**Switch to 24-hour time:** in `script.js`, set `hour12: false` in `timeOptions`. Note that the code currently splits the time string on a space to separate AM/PM, so you would also need to handle the missing AM/PM value (for example, hide the `#ampm` element).

**Change the theme:** the main colors are defined directly in `style.css`:

| Color | Used for |
| --- | --- |
| `#00ffcc` | Neon teal text and glow |
| `#7A4988` | Clock card background |
| `#311432` | Dark purple backgrounds |
| `#E39FF6` | Location badge text |

## Browser Support

Works in all current versions of Chrome, Edge, Firefox, and Safari. Time zone support relies on the standard `Intl` / `toLocaleTimeString` APIs.

## License

This project is licensed under the [MIT License](LICENSE_)
