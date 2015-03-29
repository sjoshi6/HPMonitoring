
#Usage node_data_hearbeatsender nameofnode nameofoutputjson

while [ true ]
do
  sleep 10
  curl -H "Content-Type: application/json" http://152.46.20.151:8088/ws/v1/cluster/nodes/$1
	curl -d @$2.json --header "Content-Type:application/json" 152.46.19.52:8080/nodedata
done
