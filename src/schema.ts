import { Schema } from 'mongoose';

const listItemSchema = new Schema({
  itemIds: [String],
});

const xSchema = new Schema({
  items: [listItemSchema],
});

const levelSchema = (statsSchema: Schema) =>
  new Schema({
    field: xSchema,
    stats: statsSchema,
  });

const aStats = new Schema({});
const bStats = new Schema({});
const cStats = new Schema({});
const dStats = new Schema({});
const eStats = new Schema({});
const fStats = new Schema({});
const gStats = new Schema({});
const hStats = new Schema({});
const iStats = new Schema({});
const jStats = new Schema({});

const thingSchema = (statsSchema: Schema) =>
  new Schema({
    field: Boolean,
    levels: [levelSchema(statsSchema)],
  });

const specialStats = new Schema({});

// Unused
// But lowers the startup time significantly (6x) if removed...
const specialSchema = new Schema({
  levels: [levelSchema(specialStats)],
});

const thingsSchema = new Schema({
  a: thingSchema(aStats),
  b: thingSchema(bStats),
  c: thingSchema(cStats),
  d: thingSchema(dStats),
  e: thingSchema(eStats),
  f: thingSchema(fStats),
  g: thingSchema(gStats),
  h: thingSchema(hStats),
  i: thingSchema(iStats),
  j: thingSchema(jStats),
});

// ...or moved here

export const schema = new Schema({
  things: thingsSchema,
});
