db2 = (new Mongo('localhost:27017')).getDB('test')
config = {
  	"_id" : "rs0",
  	"members" : [
  		{
  			"_id" : 0,
  			"host" : "192.168.56.105:27017"
  		},
  		{
  			"_id" : 1,
  			"host" : "192.168.56.103:27017"
  		},
		{
			"_id" : 2,
			"host" : "192.168.56.101:27017"
		}
	]
}
rs.initiate(config)
