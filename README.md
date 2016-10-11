# mongo-playbook-with-roles
MongoDB replication set with a playbook with roles

This ansible playbook contains some roles to deploy a mongoDB replica set with four virtual machines
The virtual machines IP addresses have to be updated on the /etc/ansible/hosts accordingly

Four members of the replica set as follows:
- Primary (_id 0)
- Secondary (_id 1)
- Secondary (_id 2)
- Arbiter (_id 3)

The ansible playbook creates the first three members, then change the priority of _id 1 to be the primary, and at the end _id 3 is added to the replication set as an arbiter.

This example uses the following /etc/ansible/hosts configuration

[mongo_cluster]
192.168.56.105
192.168.56.103
192.168.56.101
192.168.56.104

[mongo_primary]
192.168.56.105

[mongo_secondary]
192.168.56.103

[mongo_arbiter]
192.168.56.103
