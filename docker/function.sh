function handler() {
  EVENT_DATA=$1

  export EVENT_DATA
 
  echo "Hello from Lambda!"

}
