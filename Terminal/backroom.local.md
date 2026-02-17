# `connect backroom.local --password=Two Nine Six Two Forty Five Seven`

> Connecting to backroom.local...  
> Authentication successful.  
> Access granted. Loading directory structure...  
> /backroom.local  
> ├── [README_FINAL_v2_REAL.txt](./backroom.local/README_FINAL_v2_REAL.txt)  
> ├── [guns_list_new.xlsx](./backroom.local/guns_list_new.xlsx.txt)  
> ├── [cash_approx.txt](./backroom.local/cash_approx.txt)  
> ├── [raid_notes_store.txt](./backroom.local/raid_notes_store.txt)  
> ├── [party_list.txt](./backroom.local/party_list.txt)  
> ├── [server_passwords_old.txt](./backroom.local/server_passwords_old.txt)  
> ├── [idle_chat_dump.log](./backroom.local/idle_chat_dump.log)  
> ├── boring_shit/  
> │   ├── music/  
> │   ├── old_photos/  
> │   └── dont_open/  
> ├── [deliveries_rough.csv](./backroom.local/deliveries_rough.csv.md)  
> ├── [velluto_incident_internal.txt](./backroom.local/velluto_incident_internal.txt)  
> ├── [anton_private.enc](./backroom.local/anton_private.enc)  
> └── ...  

Files can be read by simply entering their name into the terminal, including the file extension.

Opening the `boring_shit` directory simply lists out the three files that we can see here already. The files within can be opened the same way as files directly in `/backroom.local`, there is no notion of "working directory". However, trying to open `music`, `old_photos` or `dont_open` results in the error message `File is corrupted`.

Trying to open the `anton_private.enc` using the same syntax as other files results in this being printed in the terminal:
> [QUESTION] File is encrypted. Password required.  
> Usage: anton_private.enc <password>

The correct command is `anton_private.enc Emilia`