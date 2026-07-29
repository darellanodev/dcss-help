## 1. CSS Styles for Toggle

- [x] 1.1 Add `.toolbar` flex row style in App.module.css (flex, align-items center, gap, margin-bottom 30px)
- [x] 1.2 Add `.toggleGroup` segmented control style (flex, border redondeado, overflow hidden, border cyan semi-transparente)
- [x] 1.3 Add `.toggleOption` base style (padding, background transparent, border none, color cyan, cursor pointer)
- [x] 1.4 Add `.toggleOption.active` selected state style (background cyan semi-transparente)

## 2. App.tsx Restructure

- [x] 2.1 Add toolbar row always visible after Legend with toggle group (two buttons: "Dios del día" and "Todos")
- [x] 2.2 Add SearchBar inside toolbar, conditionally rendered only when showAll=true
- [x] 2.3 Remove SearchBar from the existing showAll=true branch (it moves to toolbar)
- [x] 2.4 Keep GodSpotlight and "Ver todos" button in showAll=false branch
- [x] 2.5 Keep GodCards grid in showAll=true branch

## 3. Verify

- [x] 3.1 Run build to verify no compile errors
- [x] 3.2 Verify toggle switches between modes correctly
- [x] 3.3 Verify SearchBar only appears in Todos mode
- [x] 3.4 Verify "Ver todos" button in card still works
