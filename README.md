# fing3r

We need a service to listen to `finger` events. Use `systemd`

|Person who is fingers - `userA`|Person who is fingered - `userB`|
|--|--|
|`fing3r userB`|`.fing3r` config in the home directory changes and `userA is added to it`|
