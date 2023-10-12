"use strict";

import mongoose from "mongoose";

// Cargamos el módulo de mongoose
// Usaremos los esquemas
// Creamos el objeto del esquema y sus atributos
const publication = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: Boolean,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    data: {
      type: Array,
      required: true,
      trim: true,
    },
    colors: [
      {
        color: {
          type: String,
          required: true,
          trim: true,
        },
        name: {
          type: String,
          required: true,
          trim: true,
        },
        profileImage: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Publication", publication);
