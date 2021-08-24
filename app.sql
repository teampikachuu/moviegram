CREATE TABLE "public.Users" (
	"username" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"created_at" TIMESTAMP NOT NULL DEFAULT 'date.now()',
	CONSTRAINT "Users_pk" PRIMARY KEY ("username")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Movies" (
	"id" serial(255) NOT NULL,
	"movie_name" varchar(255) NOT NULL,
	"movie_genre" varchar(255) NOT NULL,
	"status" varchar(255) NOT NULL,
	"score" integer(10) NOT NULL,
	"username" varchar(255) NOT NULL,
	CONSTRAINT "Movies_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "Movies" ADD CONSTRAINT "Movies_fk0" FOREIGN KEY ("username") REFERENCES "Users"("username");