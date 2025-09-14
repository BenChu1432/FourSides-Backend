-- Enable pgvector (the extension name is "vector")
CREATE EXTENSION IF NOT EXISTS vector;

-- Add the column (set your embedding dimension!)
ALTER TABLE public."news"
  ADD COLUMN "embedding" vector(768);