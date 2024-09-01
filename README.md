# Rest API with typescript + mongo - starter files

Tehty docker init jne. valittu sieltä asetukset mitä tunnilla käytiin, mutta ongelmia tuli typescriptin kanssa. Piti asetuksissa valita vielä joku buildi systeemi, että buildaa koodin ja ajaa sitten dististä. Tätä varten muokattu package.jsonia näin:
"start": "node dist/src/index.js"

Nämä heitetty tunnin ohjeiden mukasesti compose.yamliin:
develop:
watch: - path: ./src
action: sync
target: /usr/local/app/src - path: ./backend/package.json
action: rebuild
ja testattu että tuo watchi tosiaan toimii.
