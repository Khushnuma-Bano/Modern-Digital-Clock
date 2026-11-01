# Password Generator

A simple desktop password generator with a soft, pastel-themed interface, built with Python and [CustomTkinter](https://github.com/TomSchimansky/CustomTkinter). Choose a minimum length, decide whether to include numbers and special characters, and generate a password with one click.

## Features

- **Custom minimum length** (defaults to 12)
- **Optional numbers** (0-9)
- **Optional special characters** (all of Python's `string.punctuation`)
- **Guaranteed character types:** if numbers or special characters are enabled, the password always contains at least one of each
- **Read-only result box** so the generated password can be selected and copied
- **Input validation** with an error dialog if the length isn't a valid number
- **Light, soft color theme** with a cream background, sage green checkboxes, and a lilac button

## Project Structure

```
.
└── Password_generator.py    # Password logic and GUI in a single file
```

## Requirements

- Python 3.8+
- `customtkinter`
- `tkinter` (included with most Python installations; on some Linux distros install `python3-tk`)

## Installation

```bash
pip install customtkinter
```

## Usage

```bash
python Password_generator.py
```

1. Enter the minimum password length.
2. Tick or untick **Include Numbers** and **Include Special Characters**.
3. Click **Generate Password**.
4. Select the password in the result box and copy it (Ctrl+C / Cmd+C).

## How It Works

`generate_password(min_length, numbers=True, special_characters=True)` builds a pool of characters starting with letters, then adds digits and punctuation depending on the options. It appends random characters one at a time until the password is at least `min_length` characters long and contains every required character type.

Because of this approach, the final password can be slightly longer than the minimum if the required character types haven't appeared yet by the time the minimum length is reached.

`ui_generate()` reads the settings from the window, calls the generator, and writes the result into the read-only entry box.

## Security Note

The generator uses Python's `random` module, which is **not designed for security-sensitive use**. For passwords you actually rely on, switch to the `secrets` module:

```python
import secrets
# replace random.choice(char) with:
secrets.choice(char)
```

## Known Limitations

- Only a minimum length is supported, not an exact length.
- Zero or negative lengths aren't rejected; they just produce a short password.
- There is no copy-to-clipboard button.
- Letters are always included and can't be turned off.
- The generator only guarantees digits and symbols, not a mix of upper and lower case letters.

## Ideas for Improvement

- Add a **Copy to Clipboard** button
- Add a password strength indicator
- Add an option for an exact length or a maximum length
- Add uppercase/lowercase toggles and an option to exclude look-alike characters (such as `l`, `1`, `O`, `0`)
- Show a dark mode toggle using `ctk.set_appearance_mode("dark")`

## License

This project is licensed under the [MIT License](LICENSE).
