import { id, i, init, InstaQLEntity } from "@instantdb/core";

// ID for app: 1234
const APP_ID = "ec916851-6aef-4699-a878-1bb897fc02c0";

// Optional: Declare your schema!
const schema = i.schema({
  entities: {
    recipes: i.entity({
        id:i.string(),
      name: i.string(),
      image: i.string(),
      difficulty: i.string(),
      prepTimeMinutes: i.number(),
    }),
  },
});

const db = init({ appId: APP_ID, schema });

export {db, schema};