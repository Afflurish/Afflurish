import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    JoinColumn,
    ManyToOne,
    Unique
} from 'typeorm';
import User from './User.js';

@Entity('budget_categories')
@Unique(['user', 'name'])
class BudgetCategory extends BaseEntity {

    constructor(
        id: number,
        user: User,
        percent: number,
        name: string,
        created_at: Date
    ) {
        super();
        this.id = id;
        this.user = user;
        this.percent = percent;
        this.name = name;
        this.created_at = created_at;
    };

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(
        () => User,
        (user: User) => user.budget_categories,
        { onDelete: "CASCADE" }
    )
    @JoinColumn({ name: "user_id" })
    user: User;

    @Column({ type: "int" })
    percent: number;

    @Column({ type: "varchar", length: 255 })
    name: string;

    @CreateDateColumn()
    created_at: Date;
};

export default BudgetCategory;