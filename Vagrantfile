Vagrant.configure('2') do |config|
  config.vm.box = 'ubuntu/xenial64'
  config.vm.network 'forwarded_port', guest: 3000, host: 3000
  config.vm.provider 'virtualbox' do |vb|
    vb.memory = '1024'
    vb.cpus = 2
  end
  config.vm.provision 'ansible_local' do |ansible|
    ansible.playbook = 'playbook.yml'
  end
  config.vm.synced_folder '.', '/vagrant'
end
