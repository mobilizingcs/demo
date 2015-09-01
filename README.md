# Demo Tool
A quick page to offer demos of enabled ohmage frontends with sample/demo data. This repository also serves as the data store for the data points made public by the Mobilize project from 2012-2015.

# "I just want the data, man"
Feel free to take a look in this repository under the `data` dir to find a csv per campaign, as well as photos that belong to the responses!

# Supporting this data with your ohmage frontend
A few small (but of course, important) changes are needed to support this data with your frontend.  At this time, you'll need to make sure your frontend supports the use of ohmage response data in csv file format.  Once you've done that, just make a GET request to `/navbar/demo/data/{campaign}/{campaign}demo.csv` (use of `/navbar/` subject to change) instead of the corresponding ohmage `survey_response/read` call. Two sizes of images are also supported (thumb and fullsize) and can be found via their uuid at `/navbar/demo/data/{campaign}/thumbs/{uuid}` or `/navbar/demo/data/{campaign}/images/{uuid}`.

# Licensing
The code in this respository is open-source and licensed under the Apache License, version 2.0. The full text of the license may be found at this link: http://www.apache.org/licenses/LICENSE-2.0.

The data in this repository is made available under the Open Database License: http://opendatacommons.org/licenses/odbl/1.0/. Any rights in individual contents of the database are licensed under the Database Contents License: http://opendatacommons.org/licenses/dbcl/1.0/ - See more at: http://opendatacommons.org/licenses/odbl/#sthash.NjMFMyHy.dpuf