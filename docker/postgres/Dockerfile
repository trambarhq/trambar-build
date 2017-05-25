FROM postgres:9.6

# install plv8 extension
RUN apt-get -y update &&\
    apt-get -y install wget curl git build-essential postgresql-server-dev-9.6 &&\
    wget https://github.com/plv8/plv8/archive/v2.0.3.tar.gz &&\
    tar -xvzf v2.0.3.tar.gz &&\
    cd plv8-2.0.3 &&\
    make static PG_CONFIG=/usr/lib/postgresql/9.6/bin/pg_config &&\
    make install PG_CONFIG=/usr/lib/postgresql/9.6/bin/pg_config &&\
    cd .. &&\
    rm -rf plv8-2.0.3 v2.0.3.tar.gz &&\
    apt-get -y remove wget curl git build-essential postgresql-server-dev-9.6 &&\
    apt-get clean

CMD ["postgres", "-c", "plv8.start_proc=plv8_init"]
