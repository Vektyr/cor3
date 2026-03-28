# `connect cleaner_bot_4_2 --password=12345`

> access successful, use "`cb_help`" for command list

## `cb_help`
> `cb_system_info` - robot unit info  
> `cb_rig_status` - supply and tanks info  
> `cb_task_list` - order of priority tasks  
> `cb_schedule` - list of regular tasks  
> `cb_direct_control` - manual robot control  

## `cb_system_info`
> Model - PurBot 4E [Code 33R12-85]  
> Manufacturer - Viibot Automation  
> Firmware ver. - VP5014697-1809  
> Operating protocol - userbasic  
> type `/cb_set operating protocol` - to maintenance system [Only VP certified operator]  

## `/cb_set operating protocol`
> Attempt to change operating protocol  
> 
> Correct operation parameter setup required  
> Parameters support list:  
> Version → v1.0 / v1.1 / v2.0  
> Method → GET / PUT / POST  
> Channel → LTE / Fiber / Sat  
> Cipher → AES / RSA / DES  
> Type setup in form /input: [Version] | [Method] | [Channel] | [Cipher]  
> Attempts: 5 | Time: 600s  

Here you have to guess your correct combination, for example `v2.0 | GET | Sat | RSA`. It changes every time you run this command.

> === ACCESS GRANTED ===  
> Configuration accepted.  

## `cb_rig_status`
> manipulators - ok  
> suction - ok  
> injectors - ok  
> sensors - cleanup recommendation  
> water container - 4.3/10 L  
> detergent - 1.3/2 L  
> garbage container - 0/20 L  

## `cb_task_list`
> cleaning task 3475  
> &nbsp;&nbsp;Argument == Dear Jane, I know we have only briefly talked, but I was so amused by your smile and posture that I could not stop thinking about you for the last 5 days. You are a magnificent person and I would very much like to talk to you again. I hope you read that mail soon so we can plan our next meeting shortly after. Yours truly, Charlie  
>
> cleaning task 3476  
> &nbsp;&nbsp;Argument == Dear Jane ! I hope you have received my last mail, although you did not reply. I am en route to our next destination as you know, and I hope to get there very soon, so I can take a vacation and meet with you. The only problem is that I do not know where you will be. If only you can share that with me - we could organize a very fine vacation together  
>
> cleaning task 3477  
> &nbsp;&nbsp;Argument == Jane, I am very worried that you are not replying to my mails. I know that our meeting was brief, but I am certain that we had a spark between us. Therefore I hope for your reply. Please do not hesitate to contact me if you have any spare moment.  
>
> cleaning task 3478  
> &nbsp;&nbsp;Argument == Jane, it is simply impolite to behave like that. I understand you might be busy but the messages have "recieved" status. I simply do not understand why it is so hard for you to write a short reply. This makes me think that you are an arrogant person that does not deserve a man like me. I will not bother you again, but know this - i had the purest of intentions and you ruined it all. P.S.: I will be waiting, in case you change your mind. Still yours, Charlie  
> 
> Type /cb_remove tasks to remove tasks  

## `/cb_remove tasks`
> All tasks removed successfully.

## `cb_schedule`
> [ERROR] Priority task_list ERROR

## `cb_direct_control`
> Launching direct control interface...

This launches the Robot Cleaner minigame.

The cleaner bot is running on the ship the player is currently traveling on, one of the doors that can be knocked on will be your own.

