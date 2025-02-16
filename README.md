# Playwright E2E Automation 🚀

This project is an **End-to-End (E2E) test automation framework** built using [Playwright](https://playwright.dev/).

## 📦 Project Details

- **Project Name:** Demo Playwright E2E Automation  
- **Playwright Version:** 1.50.1  
- **Test Runner:** Playwright Test  
- **Programming Language:** JavaScript / TypeScript  
- **Test Reports:** HTML Reports  

---

## 🔧 **Setup & Installation**

### **1️⃣ Prerequisites**  
Make sure you have:
- **Node.js** (>=18) installed → [Download Node.js](https://nodejs.org/)
- **Playwright Installed**

### **2️⃣ Clone the Repository**
```sh
git clone https://github.com/noorearafin/E2EPlaywrightAutomationDemo.git
cd YOUR_REPO
```

### **3️⃣ Install Dependencies**
```sh
npm install
```

### **4️⃣ Install Playwright Browsers**
```sh
npx playwright install
```

---

## 🚀 **Run Tests**

### **Run All Tests**
```sh
npx playwright test
```

### **Run a Specific Test File**
```sh
npx playwright test tests/example.spec.js
```

### **Run in Headed Mode (Visible Browser)**
```sh
npx playwright test --headed
```

### **Generate & Open Test Report**
```sh
npx playwright test --reporter=html
npx playwright show-report
```

---

## 📂 **Project Structure**

```
📦 demoplaywrighte2eautomation
├── 📂 tests             # Test files
│   ├── example.spec.js  # Example Playwright test
├── 📜 package.json      # Project metadata & dependencies
├── 📜 package-lock.json # Dependency lock file
├── 📜 playwright.config.js # Playwright configuration
└── 📜 .gitignore        # Files to ignore in Git
```

---

## ⚙️ **Playwright Configuration**

Located in **playwright.config.js**:
```js
module.exports = defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  reporter: 'html',
  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    trace: 'retain-on-failure',
  },
});
```

---

## 📖 **Key Features**

✅ **Cross-Browser Testing**: Chrome, Firefox, and WebKit  
✅ **Headless & Headed Mode**: Run tests with or without UI  
✅ **Automatic Screenshots & Traces** on failures  
✅ **Fast & Reliable** Execution  

---

## 🤝 **Contributing**

1. **Fork** the repository  
2. **Create a new branch** (`feature/your-feature`)  
3. **Commit your changes**  
4. **Push to your branch & submit a PR**  

---

## 📜 **License**

This project is licensed under the **ISC License**.

---

🎯 **Happy Testing with Playwright!** 🚀

