TouchlineStats App / Server Design Architecture
===============================================

**Front End**

**Back End (Server)**
 - SQLite or MySQL storage of all of the teams and their stats
 - SQL Schema in schema.md

**Back End (Local)**
 - SQLite for offline storage of team stats
    - Will only store the data for the teams that are editable by the user

