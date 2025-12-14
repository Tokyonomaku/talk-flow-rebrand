# Freemium Paywall Testing Guide

## Testing Console Commands

Open your browser's developer console (F12 or Cmd+Option+I) and use these commands:

### Toggle Premium Status
```javascript
// Enable premium (unlimited access to all languages)
localStorage.setItem('isPremium', 'true');

// Disable premium (free tier - one language)
localStorage.setItem('isPremium', 'false');
```

### Reset Free Language Selection
```javascript
// Clear free language selection (will show language picker modal on next load)
localStorage.removeItem('freeLanguage');
```

### Set Free Language Manually
```javascript
// Set Spanish as free language
localStorage.setItem('freeLanguage', 'spanish');

// Set French as free language
localStorage.setItem('freeLanguage', 'french');

// Available language IDs: spanish, french, german, korean, portuguese, japanese, chinese, russian
```

### Check Current Status
```javascript
// Check free language selection
localStorage.getItem('freeLanguage');

// Check premium status
localStorage.getItem('isPremium');

// Check completed lessons
localStorage.getItem('completedLessons');
```

### Full Reset (Start Fresh)
```javascript
// Clear everything to test first-time user experience
localStorage.removeItem('freeLanguage');
localStorage.removeItem('isPremium');
localStorage.removeItem('completedLessons');
// Then refresh the page
```

## Testing Scenarios

### 1. Test First-Time User Experience
1. Clear everything: `localStorage.clear()` or use full reset command above
2. Refresh the page
3. Should see "Choose Your Free Language" modal
4. Select a language (e.g., Spanish)
5. Verify you can access all 10 lessons in that language
6. Verify status bar shows "Learning Spanish for free"

### 2. Test Language Locking
1. Set free language: `localStorage.setItem('freeLanguage', 'spanish')`
2. Set premium to false: `localStorage.setItem('isPremium', 'false')`
3. Refresh the page
4. Navigate to language selector
5. Verify Spanish shows "FREE" badge
6. Verify all other languages show "🔒 Premium" badge
7. Click a locked language - should show upgrade modal

### 3. Test Premium Access
1. Set premium: `localStorage.setItem('isPremium', 'true')`
2. Refresh the page
3. Verify status bar shows "Premium Member" badge
4. Navigate to language selector
5. Verify NO locks on any languages
6. Verify all languages are accessible

### 4. Test Free Language Switching
1. Set free language: `localStorage.setItem('freeLanguage', 'spanish')`
2. Set premium to false: `localStorage.setItem('isPremium', 'false')`
3. Click a locked language to open upgrade modal
4. Click "Switch Free Language" button
5. Select a different language (e.g., French)
6. Verify new language is now unlocked
7. Verify previous language is now locked

### 5. Test Lesson Access
1. Set free language: `localStorage.setItem('freeLanguage', 'spanish')`
2. Navigate to Spanish lessons
3. Verify ALL 10 lessons are accessible (no locks)
4. Complete a few lessons
5. Verify progress tracking works
6. Navigate to a locked language (e.g., French)
7. Should be blocked from accessing lessons

## Expected Behavior

- **First-time users**: Must select one free language before accessing app
- **Free users**: Can access all 10 lessons in their selected free language only
- **Premium users**: Unlimited access to all 11 languages and all lessons
- **Status bar**: Shows "Premium Member" or "Learning [Language] for free"
- **Language cards**: 
  - Free language shows "FREE" badge (green border)
  - Locked languages show "🔒 Premium" badge
  - Premium users see no badges/locks
- **Upgrade modal**: Appears when clicking locked languages
- **Language switching**: Available via "Switch Free Language" button in upgrade modal
