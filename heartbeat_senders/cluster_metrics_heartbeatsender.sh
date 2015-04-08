#Usage cluster_metrics_hearbeatsender.sh

while [ true ]
do
  sleep 10
  curl -H "Content-Type: application/json" http://152.46.20.151:8088/ws/v1/cluster/metrics > cluster_metrics.json
	curl -d @cluster_metrics.json --header "Content-Type:application/json" 152.46.19.52:8080/clustermetricsdata
done
