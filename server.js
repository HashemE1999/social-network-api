// Import all necessary packages
const express = require("express");
const db = require('./config/connection');

// Require all models
const { User, Thought, Reaction } = require('./models');