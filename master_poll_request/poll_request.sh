while [ true ]
do
        sleep 5
        /home/ubuntu/slave_setup/start_proc.sh
        echo "Poll finish" >> /home/ubuntu/stats/log.txt
done
