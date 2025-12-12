# Test Flow (Manual)

Use this document to validate the end-to-end freemium/premium experience.

## Tester info

- **Date**: __________
- **Tester**: __________
- **Environment**:
  - **Device/OS**: __________
  - **Browser**: __________
  - **Build**: Local / Preview / Production (circle one)
  - **URL**: __________

## FREE USER TEST

> Start from a fresh state (recommended): Incognito window / cleared site data.

- [ ] **Pick 2 languages** ✅/❌
- [ ] **See 26 lessons per language** ✅/❌
- [ ] **Lessons 1–10 unlocked** ✅/❌
- [ ] **Lessons 11–26 locked** ✅/❌
- [ ] **Click lesson 11 → modal appears** ✅/❌
- [ ] **Modal button → Gumroad opens** ✅/❌

### Screenshots (FREE)

- [ ] **FREE-01** Language selection showing **two languages chosen**
- [ ] **FREE-02** Lesson list showing **26 lessons** for a language
- [ ] **FREE-03** Lesson list showing **1–10 unlocked**
- [ ] **FREE-04** Lesson list showing **11–26 locked**
- [ ] **FREE-05** Clicking **Lesson 11** with the **modal visible**
- [ ] **FREE-06** Browser showing **Gumroad page opened** (new tab/window)

## PREMIUM USER TEST

> If you completed the free test in the same browser profile, keep that state and proceed.

- [ ] **Go to /activate** ✅/❌
- [ ] **Enter PREMIUM2025** ✅/❌
- [ ] **All lessons unlock** ✅/❌
- [ ] **No locks visible** ✅/❌
- [ ] **Works on reload** ✅/❌

### Screenshots (PREMIUM)

- [ ] **PREMIUM-01** `/activate` page visible
- [ ] **PREMIUM-02** Code entry showing **PREMIUM2025** submitted + success state
- [ ] **PREMIUM-03** Lesson list showing **all lessons unlocked**
- [ ] **PREMIUM-04** Lesson list showing **no lock icons/locked styling**
- [ ] **PREMIUM-05** After full reload, still **unlocked/no locks**

## Notes / bugs

- **Observed behavior**:
  - 
- **Expected behavior**:
  - 
- **Console errors (if any)**:
  - 
- **Network issues (if any)**:
  - 
- **Repro steps**:
  1. 
  2. 
