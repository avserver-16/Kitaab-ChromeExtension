# 📘 Kitaab – Smart Web Notes for Every Site

Kitaab is a lightweight and intuitive **Chrome Extension** that lets you **save and manage helpful data for specific websites** — like quick notes, reminders, or useful links — all directly inside your browser.

---
## Youtube
[![Kitaab](https://github.com/avserver-16/Kitaab-ChromeExtension/blob/main/Kitaab.png)](https://youtu.be/-7ry2SWE2ac?si=ZzTFZikEcpzT6Eow)

## 🚀 Features

*  **Store Notes per Website** – Each website gets its own note list.
*  **Add / Delete Items Easily** – Manage your list in one click.
*  **Minimal & Fast UI** – Clean React interface with Tailwind CSS styling.
*  **Works Across Devices** – Syncs automatically if you’re signed into Chrome.

---

## 🛠️ Tech Stack

* **React + TypeScript**
* **Vite**
* **Tailwind CSS**
* **Chrome Extension API (Manifest v3)**

---

## 📂 Folder Structure

```
kitaab-extension/
├── public/
│   ├── manifest.json
│   ├── icon.png
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── components/
│   │   ├── Input.tsx
│   │   ├── Button.tsx
│   ├── styles/
│   │   └── index.css
├── package.json
├── vite.config.ts
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/kitaab.git
cd kitaab
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run in development mode

```bash
npm run dev
```

### 4. Build the extension

```bash
npm run build
```

This will generate a `dist/` folder containing the production-ready extension.

---

## 🧩 Load Extension in Chrome

1. Open **Chrome** and go to `chrome://extensions/`
2. Enable **Developer Mode** (top-right corner)
3. Click **Load unpacked**
4. Select the **`dist/`** folder
5. Pin **Kitaab** to your extensions bar

Now, click the Kitaab icon to start saving notes!

---

## 🧠 How It Works

Kitaab uses the **Chrome Storage API**:

* When you open a page, it fetches stored data (`chrome.storage.sync.get`)
* When you add or delete a note, it updates storage (`chrome.storage.sync.set`)

---

## 🪶 Future Enhancements

* ✍️ Rich text support for notes
* 🔍 Search through saved notes
* 📎 Save page metadata (title, URL) automatically


---

## 🧑‍💻 Author

**Avish Shetty**
📍 India
🔗 [GitHub](https://github.com/avserver-16)

---

## 📜 License

This project is licensed under the **MIT License** — feel free to use and modify it.

---

