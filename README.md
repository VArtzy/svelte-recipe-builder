### **Dynamic Recipe Builder**

#### Description:
Create an interactive recipe builder where users can:
- Add ingredients dynamically.
- Adjust ingredient quantities based on the number of servings.
- See real-time calculations of nutritional values (like calories, protein, etc.).
- Save and load recipes using local storage.

#### Run Project

```bash
# after cloning this project
npm i

npx vite dev
```

---

#### Key Features:
1. **Dynamic Inputs**:
   - Add or remove ingredient rows dynamically.
   - Use Svelte's `each` blocks and reactivity for real-time UI updates.
DONE

2. **Two-way Binding**:
   - Bind input fields (ingredient name, quantity, unit) to a reactive state.
DONE

3. **Live Calculations**:
   - Automatically recalculate total nutritional values as ingredients or quantities change.
TODO

4. **LocalStorage Integration**:
   - Save and load recipes for persistence.
DONE

5. **Custom Actions (Svelte 5)**:
   - Implement actions for advanced interactions like highlighting invalid inputs.
TODO

6. **Transitions & Animations**:
   - Smooth animations when adding or removing ingredients.
TODO

---

#### Why It's Fun:
- It's highly interactive and visually dynamic.
- It's practical and avoids cliches.
- It introduces new Svelte 5 concepts while reinforcing basics.
