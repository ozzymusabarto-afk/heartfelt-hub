import json

with open('src/data/missions.ts', 'r') as f:
    content = f.read()

# I will assume the missions are structured as JSON-like blocks inside the MISSIONS array
# Since parsing this manually is complex, I will perform string replacements
# to fix the specific items for missions 01-24.

# This is a bit risky due to the scale, but I will target the blocks for each mission ID.
# Let's perform a simple check for ID M001-BP to M024-VA05.

# I will write a safer python script to re-structure the expected data
