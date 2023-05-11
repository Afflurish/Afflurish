import { 
    Entity, 
    BaseEntity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn,
    UpdateDateColumn,
    Unique
} from 'typeorm';

@Entity('users')
@Unique(['email'])
class User extends BaseEntity {

    constructor(
        id: string,
        email: string,
        display_name: string,
        password: string,
        updated_at: Date,
        created_at: Date
    ) {
        super();
        this.id = id;
        this.email = email;
        this.display_name = display_name;
        this.password = password;
        this.updated_at = updated_at;
        this.created_at = created_at;
    };

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", length: 255 })
    email: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    display_name: string;

    @Column({ type: "varchar", length: 255 })
    password: string;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;
};

export default User;