# `connect fetcher_242 --password=admin`
> access granted, to see commands type "f2_help"

## `f2_help`
> f2_sys_summary - unit summary  
> f2_fetch_request - use to retrieve cargo  
> f2_store_request - use to store cargo  
> f2_cargo_list - list of registered cargo  
> f2_robotics_status - components info  
> f2_manual_test - manual test of functionality  

## `f2_sys_summary`
> Model - Fetcher 2 AMR [5B92]  
> Manufacturer - Rostov Dynamic  
> Software - I35-2443  
> Test mode - disabled, use command \\Test_mode 1 to enable debug feature  

## `f2_fetch_request`
> [ERROR] ERROR P0A80

## `f2_store_request`
> [ERROR] ERROR P0A80

## `f2_robotics_status`
> Manipulators - nominal functionality  
> Motion drives - voltage and temperature excess, maintenance recommended  
> Sensors array - nominal functionality  
> Battery array - ERROR P0A80  

## `Test_mode 1`
> Attempt to activate debug features

This launches the Terminal Hack minigame similarly to cleaner_bot_4_2's [cb_set operating protocol](./cleaner_bot_4_2.md#cb_set-operating-protocol).

> Parameters support list:  
> Version — 13-2 / 3-47 / 89-0  
> Method — ADM / RDMM / CMU  
> Agent — Moro / Rose / Victor  
> Protocol — 1 / 2 / 3 / 3.8  
> Priority — BSC / MTNS / FM  
> Type setup in form /input: [Version] | [Method] | [Agent] | [Protocol] | [Priority]  

There are four protocol versions, while only three options for other fields.

> === ACCESS GRANTED ===  
> Configuration accepted.  

## `f2_cargo_list`
> AGE_group containers - 25  
> Delivery containers - 17  
> Emer_resources containers - 8  
> Passenger_stuff containers - 5  
> Bobby's_bits container - 3  

## `f2_manual_test`
Launches the Logistics Robot minigame.

There are only two actions which drain the robot's battery: Loading a container and moving while carrying a container.
